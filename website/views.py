from flask import Blueprint, render_template

views = Blueprint('views', __name__)

# Router
@views.route('/', methods=['GET', 'POST'])
def home():
    return render_template("base.html")
