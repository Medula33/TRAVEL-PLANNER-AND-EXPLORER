from flask import Flask, render_template, request

app = Flask(__name__)

# Home route to display the form
@app.route('/')
def home():
    return render_template('index.html')

# Search route to handle form submission
@app.route('/search', methods=['POST'])
def search():
    # Get the form data
    destination = request.form['destination']
    travel_date = request.form['travelDate']
    
    # Process the data (for now, just display it)
    return f"Searching for {destination} on {travel_date}"

if __name__ == '__main__':
    app.run(debug=True)
