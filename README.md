# FanFocusAI

FanFocusAI is a personalized MLB highlights experience application. It allows fans to select their favorite teams and players and receive personalized audio, video, and text digests of the latest highlights.

## Features

- **User Authentication**: Login and Signup functionality.
- **Personalized Dashboard**: Users can select their favorite teams and players.
- **Highlight Generation**: Generate personalized audio, video, and text digests.
- **Multi-language Support**: Supports English, Spanish, and Japanese languages.
- **Google Cloud Integration**: Utilizes Google Cloud Services for data storage, AI models, and deployment.

## Prerequisites

- Python 3.x
- Node.js and npm
- Google Cloud account with enabled APIs for Storage, Video Intelligence, Translation, and AI Platform.

## Installation

### Backend

1. **Set Up Virtual Environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Set Google Cloud Credentials**:
   Download the service account key for your project and set the `GOOGLE_APPLICATION_CREDENTIALS` environment variable:
   ```bash
   export GOOGLE_APPLICATION_CREDENTIALS="path/to/your/service-account-file.json"
   ```

4. **Run the Flask Application**:
   ```bash
   python main.py
   ```

### Frontend

1. **Navigate to the Frontend Directory**:
   ```bash
   cd frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm start
   ```

## Deployment

### Google Cloud Functions

1. **Open Cloud Shell**.
2. **Clone Your Repository**:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```
3. **Deploy Cloud Function**:
   ```bash
   gcloud functions deploy fanfocusai-api \
     --runtime python39 \
     --trigger-http \
     --allow-unauthenticated \
     --entry-point app \
     --region your-region
   ```

## Usage

1. **Access the Application**:
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:8080`

2. **Test Endpoints**:
   ```bash
   # Get player stats
   curl "http://localhost:8080/stats?player_id=player_id&season=2022"

   # Summarize text
   curl -X POST "http://localhost:8080/summarize" \
        -H "Content-Type: application/json" \
        -d '{"text": "Your text to summarize here."}'

   # Analyze video
   curl -X POST "http://localhost:8080/analyze" \
        -H "Content-Type: application/json" \
        -d '{"video_uri": "gs://path-to-your-video.mp4"}'
   ```

## Contributing

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push your changes to the branch.
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- Google Cloud for providing various APIs and services.
- MLB Stats API for providing access to historical and present-day data feeds.
