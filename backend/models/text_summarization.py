from googleapiclient import discovery

def summarize_text(text):
    project_id = 'your-project-id'
    model_id = 'your-model-id'

    service = discovery.build('ml', 'v1')
    name = f'projects/{project_id}/models/{model_id}'

    request_body = {'instances': [{'text': text}]}
    response = service.projects().predict(name=name, body=request_body).execute()

    if 'error' in response:
        raise RuntimeError(response['error'])

    summary = response['predictions'][0]['summary']
    return summary

# Example usage
text = "Your text to summarize here."
summary = summarize_text(text)
print(summary)
