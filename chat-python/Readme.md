#Run the application
    python3 -m venv v
    source v/bin/activate
    gunicorn -b 0.0.0.0:8080 --worker-class eventlet -w 1 server:app

#For this app to run using eventlet eventlet==0.30.2 is required.