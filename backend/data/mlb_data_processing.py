import requests
import pandas as pd
from google.cloud import storage

def fetch_player_stats(player_id, season):
    url = f"https://statsapi.mlb.com/api/v1/people/{player_id}?season={season}"
    response = requests.get(url)
    data = response.json()

    # Check for the 'people' key and ensure it contains data
    if 'people' in data and len(data['people']) > 0:
        player_info = data['people'][0]
        print("Player Info:", player_info)

        # Extract relevant player information
        player_data = {
            "fullName": player_info.get("fullName", ""),
            "primaryNumber": player_info.get("primaryNumber", ""),
            "birthDate": player_info.get("birthDate", ""),
            "currentAge": player_info.get("currentAge", ""),
            "birthCity": player_info.get("birthCity", ""),
            "birthCountry": player_info.get("birthCountry", ""),
            "height": player_info.get("height", ""),
            "weight": player_info.get("weight", ""),
            "active": player_info.get("active", ""),
            "primaryPosition": player_info.get("primaryPosition", {}).get("name", ""),
            "nickName": player_info.get("nickName", ""),
            "mlbDebutDate": player_info.get("mlbDebutDate", ""),
            "batSide": player_info.get("batSide", {}).get("description", ""),
            "pitchHand": player_info.get("pitchHand", {}).get("description", "")
        }
        
        # Convert player data to DataFrame
        df = pd.DataFrame([player_data])
        print("DataFrame:", df)
        return df
    else:
        print("No player data found")
        return pd.DataFrame()  # Return an empty DataFrame on error

def preprocess_data(df):
    df.fillna(method='ffill', inplace=True)
    return df

def upload_to_gcs(bucket_name, destination_blob_name, source_file_name):
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(destination_blob_name)
    blob.upload_from_filename(source_file_name)

# Example usage
player_stats = fetch_player_stats('660271', '2022')
cleaned_stats = preprocess_data(player_stats)
cleaned_stats.to_csv('cleaned_stats.csv')
upload_to_gcs('fanfocusai_cloudbuild', 'cleaned_stats.csv', 'cleaned_stats.csv')
