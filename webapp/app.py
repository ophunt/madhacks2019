from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("home.html")

"""
@app.route('/Login')
def index():
    return render_template("index.html")


@app.route('/Register')
def index():
    return render_template("index.html")


@app.route('/Tracker')
def index():
    return render_template("index.html")


@app.route('/Profile')
def index():
    return render_template("index.html")


@app.route('/Tips')
def index():
    return render_template("index.html")


@app.route('/About')
def index():
    return render_template("index.html")


@app.route('/Ranking')
def index():
    return render_template("index.html")

@app.route("/Clarence")
def salvador():
    return "Hello, Clarence"
"""

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')