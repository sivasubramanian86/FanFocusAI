from flask import Flask, request, jsonify
from data.mlb_data_processing import fetch_player_stats, preprocess_data
from models.text_summarization import summarize_text
from models.video_analysis import analyze_video

app = Flask(__name__)

@app.route('/stats', methods=['GET'])
def get_stats():
    player_id = request.args.get('player_id')
    season = request.args.get('season')
    player_stats = fetch_player_stats(player_id, season)
    cleaned_stats = preprocess_data(player_stats)
    return jsonify(cleaned_stats.to_dict())

@app.route('/summarize', methods=['POST'])
def summarize():
    data = request.get_json()
    text = data['text']
    summary = summarize_text(text)
    return jsonify({'summary': summary})

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    video_uri = data['video_uri']
    result = analyze_video(video_uri)
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
