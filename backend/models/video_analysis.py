from google.cloud import videointelligence_v1 as videointelligence

def analyze_video(uri):
    video_client = videointelligence.VideoIntelligenceServiceClient()
    features = [videointelligence.Feature.LABEL_DETECTION]
    operation = video_client.annotate_video(input_uri=uri, features=features)
    result = operation.result(timeout=90)
    return result

# Example usage
video_uri = 'gs://path-to-your-video.mp4'
analysis_result = analyze_video(video_uri)
print(analysis_result)
