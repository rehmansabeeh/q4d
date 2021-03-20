from flask import Flask, render_template, url_for, request, session, redirect, make_response, jsonify
from flask_pymongo import PyMongo
import bcrypt
import json
from bson import ObjectId
import random
import re

app = Flask(__name__)


app.config['MONGO_DBNAME'] = 'TESTLOGIN'
app.config['MONGO_URI'] = "mongodb+srv://sabeeh:sabeeh123@cluster0.etpsv.gcp.mongodb.net/TESTLOGIN?retryWrites=true&w=majority"
session = {}
mongo = PyMongo(app)


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        print('hello')
    return redirect(url_for("homepage"))

@app.route('/homepage', methods=['GET', 'POST'])
def homepage():
    if request.method == 'POST':
        return redirect(url_for("termsandconditions"))
    return render_template("homepage.html")


@app.route('/termsandconditions', methods=['GET', 'POST'])
def termsandconditions():
    if request.method == 'POST':
        return redirect(url_for("create_profile_1"))
    return render_template("Terms_And_Conditions.html")


@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        users = mongo.db.users
        lusers = users.find_one({'user_name': request.form['username']})
        print(lusers)
        if lusers:
            print(bcrypt.hashpw(request.form['pass'].encode(
                'utf-8'), lusers['password']))
            if bcrypt.hashpw(request.form['pass'].encode('utf-8'), lusers['password']) == lusers['password']:
                if lusers['administrator']=='True':
                    print('admin')
                    return redirect(url_for('admin'))
                else:
                    print('user')
                    return redirect(url_for('thank_you_page'))
            else:
                print("invalid credentials")
                return redirect(url_for('login'))
        else:
            return redirect(url_for('login'))
    else:
        return render_template('LoginScreen.html')


@app.route('/ending_info_start', methods=['POST', 'GET'])
def ending_info_start():
    if request.method == 'POST':
        res = make_response(jsonify({'message': "successful"}))
        return res
    else:
        return render_template('screen8.html')


@app.route('/register_3', methods=['POST', 'GET'])
def register_3():
    print("register page 3", request.method)
    if request.method == "POST":
        users = mongo.db.users
        data_user = request.get_json(force=True)
        print(data_user)
        user_id = data_user['query_variable_in_url']
        # from url id get previous dat which contains email
        existing_user = users.find_one(
            {'username': data_user['username']})

        if existing_user is None:
            previous_data = users.find_one({"user_id": ObjectId(user_id)})
            temp_keys = previous_data.keys()
            hashpass = bcrypt.hashpw(
                data_user['password'].encode('utf-8'), bcrypt.gensalt())

            if "email" in temp_keys:
                users.find_and_modify({"user_id": ObjectId(user_id)},

                                      {"user_id": ObjectId(user_id),
                                       'user_name': data_user['username'],
                                       'password': hashpass,
                                       'email': previous_data["email"],
                                       'administrator' : 'false'}
                                      )
            elif "number" in temp_keys:
                users.find_and_modify({"user_id": ObjectId(user_id)},
                                      {"user_id": ObjectId(user_id),
                                       'user_name': data_user['entered_username_user'],
                                       'password': hashpass,
                                       'number': previous_data["number"],
                                       'administrator' : 'false'}
                                      )
            res = make_response(
                jsonify({'message': "successful"}))
            return res
        else:
            print("after clicking")
            res = make_response(
                jsonify({'message': "existing"}))
            return res
    else:
        return render_template("DyslexiaScreen_After_4.html")


@app.route('/register_1', methods=['POST', 'GET'])
def register_1():
    if request.method == 'POST':

        users = mongo.db.users
        data = request.get_json(force=True)

        print(data)
        print(data['entered_email_user'])
        print(data['phone_number_user'])

        user_id = data['query_variable_in_url']

        if (data['entered_email_user'] == '' and data['phone_number_user'] == ''):
            print("User did not enter anything so condition 1")
            res = make_response(
                jsonify({'message': "unsuccessful", 'trajectory': "email"}))

        elif(data['entered_email_user'] == '' and data['phone_number_user'] != ''):
            Pattern = re.compile("(3)[0-9]{9}")
            if Pattern.match(data['phone_number_user']):
                print("User entered phone number so condition 2")
                existing_user_number = users.find_one(
                    {'number': data['phone_number_user']})
                print("checking is the phone number already exists",
                      existing_user_number)
                if existing_user_number is None:
                    print("No phone number exists in the database")
                    user_having_multiple_accounts_with_different_email_number = users.find_one({
                        "user_id": ObjectId(user_id)})
                    print("checking if the user id have other emails or numbers registered to it ",
                          user_having_multiple_accounts_with_different_email_number)
                    if user_having_multiple_accounts_with_different_email_number is None:
                        print("No previous data found so we can insert now")
                        users.insert_one({'user_id': ObjectId(
                            user_id), 'number': data['phone_number_user']})
                        res = make_response(jsonify(
                            {'message': "successful", "id_to_be_passed": user_id, 'trajectory': "phone_no"}))

                    else:
                        print("previous data found matched with id")
                        temp_keys = user_having_multiple_accounts_with_different_email_number.keys()

                        if "number" in temp_keys:
                            res = make_response(
                                jsonify({'message': "existing_number"}))

                        elif "email" in temp_keys:
                            res = make_response(
                                jsonify({'message': "existing_email"}))

                        # res = make_response(jsonify({'message': "existing"}))
                else:
                    print("previous data found matched with number")
                    res = make_response(jsonify({'message': "existing"}))
            else:
                res = make_response(jsonify({'message': "invalid_number"}))

        elif (data['entered_email_user'] != '' and data['phone_number_user'] == ''):
            print("User entered email so condition 2")
            if re.match(r"[^@]+@[^@]+\.[^@]+", data['entered_email_user']):
                existing_user_email = users.find_one(
                    {'email': data['entered_email_user']})

                print("checking is the email already exists",
                      existing_user_email)

                if existing_user_email is None:

                    print("No phone number exists in the database")

                    user_having_multiple_accounts_with_different_email_number = users.find_one({
                        "user_id": ObjectId(user_id)})

                    print("checking if the user id have other emails or numbers registered to it ",
                          user_having_multiple_accounts_with_different_email_number)

                    if user_having_multiple_accounts_with_different_email_number is None:
                        print("No previous data found so we can insert now")

                        users.insert_one({'user_id': ObjectId(
                            user_id), 'email': data['entered_email_user']})
                        res = make_response(jsonify(
                            {'message': "successful", "id_to_be_passed": user_id, 'trajectory': "email"}))
                    else:
                        print("previous data found matched with id")
                        temp_keys = user_having_multiple_accounts_with_different_email_number.keys()
                        print(temp_keys)
                        if "number" in temp_keys:
                            res = make_response(
                                jsonify({'message': "existing_number"}))

                        elif "email" in temp_keys:
                            res = make_response(
                                jsonify({'message': "existing_email"}))

                else:
                    print("previous data found matched with number")
                    res = make_response(jsonify({'message': "existing"}))
            else:
                res = make_response(jsonify({'message': "invalid_email"}))

        elif (data['entered_email_user'] != '' and data['phone_number_user'] != ''):
            print("User entered both so we choose email so condition 3")
            if re.match(r"[^@]+@[^@]+\.[^@]+", data['entered_email_user']):
                existing_user_email = users.find_one(
                    {'email': data['entered_email_user']})

                print("checking is the email already exists",
                      existing_user_email)

                if existing_user_email is None:

                    print("No phone number exists in the database")

                    user_having_multiple_accounts_with_different_email_number = users.find_one({
                        "user_id": ObjectId(user_id)})

                    print("checking if the user id have other emails or numbers registered to it ",
                          user_having_multiple_accounts_with_different_email_number)

                    if user_having_multiple_accounts_with_different_email_number is None:
                        print("No previous data found so we can insert now")

                        users.insert_one({'user_id': ObjectId(
                            user_id), 'email': data['entered_email_user']})
                        res = make_response(jsonify(
                            {'message': "successful", "id_to_be_passed": user_id, 'trajectory': "email"}))
                    else:
                        print("previous data found matched with id")
                        temp_keys = user_having_multiple_accounts_with_different_email_number.keys()

                        if "number" in temp_keys:
                            res = make_response(
                                jsonify({'message': "existing_number"}))

                        elif "email" in temp_keys:
                            res = make_response(
                                jsonify({'message': "existing_email"}))

                else:
                    print("previous data found matched with number")
                    res = make_response(jsonify({'message': "existing"}))
            else:
                res = make_response(jsonify({'message': "invalid_email"}))
        return res

    else:
        return render_template('DyslexiaScreen_After_1.html')


@app.route('/register_using_email', methods=['POST', 'GET'])
def register_using_email():

    if request.method == "POST":
        data_user = request.get_json(force=True)
        print(data_user)
        user_id = data_user['query_variable_in_url']

        print("after email clicking")
        res = make_response(
            jsonify({'message': "successful", "id_to_be_passed": user_id}))
        return res
    else:
        users = mongo.db.users
        temp = request.args.get('id')
        user_id = ObjectId(temp)
        print("ID: ", temp)
        print("Users: ",  users)
        existing_user = users.find_one({'user_id': user_id})
        print(existing_user)
        return render_template("DyslexiaScreen_After_2.html", data=existing_user['email'])
    # print(request.method)
    # return render_template("DyslexiaScreen_After_2.html")


@app.route('/video_page', methods=['POST', 'GET'])
def video_page():

    if request.method == "GET":
        return render_template("video_demo.html")


@app.route('/register_using_phone', methods=['POST', 'GET'])
def register_using_phone():

    if request.method == "POST":
        data_user = request.get_json(force=True)
        print(data_user)
        user_id = data_user['query_variable_in_url']

        print("after email clicking")
        res = make_response(
            jsonify({'message': "successful", "id_to_be_passed": user_id}))
        return res
    else:
        users = mongo.db.users
        temp = request.args.get('id')
        user_id = ObjectId(temp)
        print("ID: ", temp)
        print("Users: ",  users)
        existing_user = users.find_one({'user_id': user_id})
        return render_template("DyslexiaScreen_After_3.html", data=existing_user['number'])


@app.route('/thank_you_page', methods=['POST', 'GET'])
def thank_you_page():
    if request.method == 'POST':
        res = make_response(jsonify({'message': "successful"}))
        return res
    else:
        return render_template('DyslexiaScreen_ThankYou.html')


@app.route('/create_profile_1', methods=['POST', 'GET'])
def create_profile_1():
    print("method is : ", request.method)
    users = mongo.db.name_age_gender
    # lusers = users.find_one({'name': request.form['username']})
    # users.replace_one(
    # {"name": "sabeeh"},
    # {"name": "sabeeh",
    #  "date": data['date'],
    #  "update": 'true'}
    #                  )

    if request.method == 'POST':
        data_user = request.get_json(force=True)
        print(data_user)
        if(data_user['entered_name_user'] == "" or data_user['entered_day_user'] == "" or data_user['entered_month_user'] == "" or data_user['entered_year_user'] == "" or data_user['selected_gender_user'] == ""):
            res = make_response(
                jsonify({'message': "unsuccessful"}))
            return res
        else:
            _id = users.insert_one(
                {'name': data_user['entered_name_user'], 'date_of_birth': [data_user['entered_day_user'],
                                                                           data_user['entered_month_user'], data_user['entered_year_user']], 'gender_user': data_user['selected_gender_user']}
            )
        # lusers = users.find_one({'temp_id': temp})
            new_entry_unique_id = str(_id.inserted_id)
            print("User ID IN INSERT", new_entry_unique_id)
            res = make_response(
                jsonify({'message': "successful", "id_to_be_passed": new_entry_unique_id}))
            return res
    else:
        return render_template('DyslexiaScreen1.html')


@app.route('/create_profile_2', methods=['POST', 'GET'])
def create_profile_2():

    print("method2 is : ", request.method)
    users = mongo.db.name_age_gender

    if request.method == 'POST':

        data = request.get_json(force=True)
        print(data)
        user_id = data['query_variable_in_url']
        # print("USERNAMEEEEE2 ", username )
        user_id = ObjectId(user_id)

        print("Uer_id testing", user_id)
        lusers = users.find_one({'_id': user_id})
        print(lusers['_id'])

        _id = users.find_and_modify(
            {"_id": user_id},
            {'name': lusers['name'], 'date_of_birth': lusers['date_of_birth'], 'gender_user': lusers['gender_user'],
                'grade_selected_user': data['grade_sent'], 'selected_education_user': data['selected_education_level_sent']}
        )
        user_id = str(_id.get('_id'))
        print("User ID IN REPLACE", user_id)
        res = make_response(
            jsonify({'message': "successful", "id_to_be_passed": user_id}))
        return res

    return render_template('DyslexiaScreen2.html')


@app.route('/create_profile_3', methods=['POST', 'GET'])
def create_profile_3():

    print("method3 is : ", request.method)
    users = mongo.db.name_age_gender

    if request.method == 'POST':
        data = request.get_json(force=True)
        print(data)
        user_id = data['query_variable_in_url']
        # print("USERNAMEEEEE2 ", username )
        user_id = ObjectId(user_id)
        print("Uer_id testing", user_id)

        lusers = users.find_one({'_id': user_id})
        print(lusers['_id'])
        print(data['dyslexia_diagnosed_condition'])
        _id = users.find_and_modify(
            {"_id": user_id},
            {'name': lusers['name'], 'date_of_birth': lusers['date_of_birth'], 'gender_user': lusers['gender_user'], 'grade_selected_user': lusers['grade_selected_user'], 'selected_education_user':
                lusers['selected_education_user'], 'first_language_Urdu': data['first_language_Urdu'], 'bilingual_Urdu': data['bilingual_Urdu'], 'reading_writing_in_Urdu': data['reading_writing_in_Urdu'], 'dyslexia_diagnosed_condition' : data['dyslexia_diagnosed_condition']}
        )
        user_id = str(_id.get('_id'))
        print("User ID IN REPLACE3", user_id)
        res = make_response(
            jsonify({'message': "successful", "id_to_be_passed": user_id}))
        return res

    return render_template('DyslexiaScreen3.html')


@app.route('/admin', methods=['POST', 'GET'])
def admin():
    users = mongo.db.name_age_gender
    scores=mongo.db.Scores
    if request.method == 'POST':
        data_to_send=[]
        data = request.get_json(force=True)

        if data['selected_filter_sent']=='Gender':
            dummy=users.find({'gender_user': data['gender']})
            for i in dummy:
                print("User id is ",i['_id'])
                temp_list=[]
                user_scores=scores.find({"user_id": i['_id']})
                user_scores=list(user_scores)
                if user_scores ==[]:
                    continue
                print(user_scores[0]['attempted_questions'])
                temp_list=[i['name'], user_scores[0]['attempted_questions'], user_scores[0]['score']]
                data_to_send.append(temp_list)
            res = make_response(
            jsonify({'message': "successful", "list_passed": data_to_send}))
        
        elif data['selected_filter_sent']=='Date':
            dummy=users.find({'date_of_birth': [data['entered_day_user'],data['entered_month_user'],data['entered_year_user']]})
            for i in dummy:
                temp_list=[]
                user_scores=scores.find({"user_id": i['_id']})
                user_scores=list(user_scores)
                if user_scores ==[]:
                    continue
                print(user_scores[0]['attempted_questions'])
                temp_list=[i['name'], user_scores[0]['attempted_questions'], user_scores[0]['score']]
                data_to_send.append(temp_list)
            res = make_response(
            jsonify({'message': "successful", "list_passed": data_to_send}))

        elif data['selected_filter_sent']=='Language':
            lan=""
            if data['language'] =="Urdu":
                lan='Yes'
            else:
                lan='No'

            dummy=users.find({'first_language_Urdu': lan})
            for i in dummy:
                temp_list=[]
                user_scores=scores.find({"user_id": i['_id']})
                user_scores=list(user_scores)
                if user_scores ==[]:
                    continue
                print(user_scores[0]['attempted_questions'])
                temp_list=[i['name'], user_scores[0]['attempted_questions'], user_scores[0]['score']]
                data_to_send.append(temp_list)
            res = make_response(
            jsonify({'message': "successful", "list_passed": data_to_send}))
        
        elif data['selected_filter_sent']=='Education Level':
            print(data)
            if data['grade']==None:
                dummy=users.find({'selected_education_user': data['education_level']})
            else:
                dummy=users.find({'grade_selected_user':data['grade']})
            
            for i in dummy:
                temp_list=[]
                user_scores=scores.find({"user_id": i['_id']})
                user_scores=list(user_scores)
                if user_scores ==[]:
                    continue
                print(user_scores[0]['attempted_questions'])
                temp_list=[i['name'], user_scores[0]['attempted_questions'], user_scores[0]['score']]
                data_to_send.append(temp_list)
            res = make_response(
            jsonify({'message': "successful", "list_passed": data_to_send}))
        
        return res
    else:
        return render_template("database_filters.html")


@app.route('/q1_quiz', methods=['POST', 'GET'])
def q1_quiz():

    print("Q1 QUIZ", request.method)
    questions = mongo.db.Questions
    if request.method == 'POST':
        questions = mongo.db.Questions
        # <========Need to find correct answers here============>
        # correct_answers =
        score = 0
        attempted_questions=0
        mcqs_answers = request.get_json(force=True)

        print("Answers: ", mcqs_answers)
        for answers in mcqs_answers['selected']:
            if answers!= None:
                attempted_questions+=1
        for element in range(len(mcqs_answers['selected'])):
            # print( "correct option is" ,mcqs_answers['correct_answers'][element])
            if mcqs_answers['selected'][element] == mcqs_answers['correct_answers'][element]:
                score += 1
                # print( "option we choose is ", mcqs_answers['selected'][element])
            

        print(attempted_questions)
        print(score)
        user_id = mcqs_answers['query_variable_in_url']
        # print("USERNAMEEEEE2 ", username )
        user_id = ObjectId(user_id)
        add_score = mongo.db.Scores
        add_score.insert_one(
            {'user_id': user_id, "score": score, "attempted_questions": attempted_questions }
        )
        user_id = str(user_id)
        res = make_response(
            jsonify({'message': "successful", "id_to_be_passed": user_id}))
        return res

    else:
        users = mongo.db.name_age_gender
        user_id = request.args.get('id')
        # print("USERNAMEEEEE2 ", username )
        user_id = ObjectId(user_id)
        user_data = users.find_one({'_id': user_id})
        print("User grade", user_data['grade_selected_user'])
        
        
        to_check=''
        if user_data['grade_selected_user']=="":
            to_check=str(user_data['selected_education_user'])
        else:
            to_check=str(user_data['grade_selected_user'])
        data_all=[]
        data={}
        data2={}
        data3={}
        # value.isdigit()
        print(user_data['grade_selected_user'])
        if to_check.isdigit():
            if int(to_check) <=8:
                data = list(questions.find(
                    {'q_level': str(to_check), 'question_type': 'mcq'}))
                data2= list(questions.find(
                    {'q_level': str(int(to_check)+1), 'question_type': 'mcq'}))
                data3 = list(questions.find(
                    {'q_level': str(int(to_check)+2), 'question_type': 'mcq'}))
                data_all.append(data)
                data_all.append(data2)
                data_all.append(data3)
            elif int(to_check) ==9:
                data = list(questions.find(
                    {'q_level': str(int(to_check)), 'question_type': 'mcq'}))
                data2= list(questions.find(
                    {'q_level': str(int(to_check)+1), 'question_type': 'mcq'}))
                data3 = list(questions.find(
                    {'q_level': "college", 'question_type': 'mcq'}))
                data_all.append(data)
                data_all.append(data2)
                data_all.append(data3)
        if len(to_check)>=2:
            data = list(questions.find(
                {'q_level': '10', 'question_type': 'mcq'}))
            data2= list(questions.find(
                {'q_level': "college", 'question_type': 'mcq'}))
            data3 = list(questions.find(
                {'q_level': "University", 'question_type': 'mcq'}))
            data_all.append(data)
            data_all.append(data2)
            data_all.append(data3)

        
        x_all=[]
        for i in data_all:
            # print(len(i))
            x = random.sample(range(len(i)), 3)
            # print(x)
            x_all.append(x)
        
        questions_to_send = []
        for index in range(len(data_all)):
            for i in x_all[index] : #add index to x[index]
                temp = {'actual_word': "", 'image': data_all[index][i]['data'], 'option_1': "", #instead of image add data[index][i]['data']
                        'option_2': "", 'option_3': "", 'option_4': ""}
                options_to_be_selected = []
                index_of_options = random.sample(range(len(data_all[index][i]['options'])), 3)
                for index2 in index_of_options:
                    options_to_be_selected.append(data_all[index][i]['options'][index2])

                options_to_be_selected.append(data_all[index][i]['actual_word'])
                
                random.shuffle(options_to_be_selected)
                temp['actual_word'] = data_all[index][i]['actual_word']
                print(temp['actual_word'])
                temp['option_1'] = options_to_be_selected[0]
                temp['option_2'] = options_to_be_selected[1]
                temp['option_3'] = options_to_be_selected[2]
                temp['option_4'] = options_to_be_selected[3]
                data_of_one_question = temp
                questions_to_send.append(data_of_one_question)
        # print(questions_to_send)
        return render_template("screen2_ayesha.html", data=questions_to_send)


@app.route('/q2_quiz', methods=['POST', 'GET'])
def q2_quiz():

    print("Q2 QUIZ", request.method)
    questions = mongo.db.Questions
    
    if request.method == 'POST':

        # <========Need to find correct answers here============>
        # correct_answers =
        score = 0
        attempted_questions=0
        mcqs_answers = request.get_json(force=True)
        print("Answers: ", mcqs_answers)

        for answers in mcqs_answers['entered']:
            if answers!= None:
                attempted_questions+=1
        for element in range(len(mcqs_answers['entered'])):
            if mcqs_answers['entered'][element] == mcqs_answers['correct_answers'][element]:
                score += 1
        for element in range(len(mcqs_answers['entered'])):
            data = list(questions.find({'actual_word': mcqs_answers['correct_answers'][element], 'question_type': 'type'}))[0]
            print(data)
            if mcqs_answers['entered'][element] not in data['options'] and mcqs_answers['entered'][element] !='' :
                data['options'].append(mcqs_answers['entered'])
            
            questions.find_and_modify({"_id": data['_id']},
            {'question_type': data['question_type'], 'q_level': data['q_level'], 'actual_word': data['actual_word'],
                'options': data['options'], 'data': data['data']})

        user_id = mcqs_answers['query_variable_in_url']
        user_id = ObjectId(user_id)
        add_score = mongo.db.Scores

        user_scores = add_score.find_one({'user_id': user_id})
        new_score= score+ user_scores['score']
        new_attempted_questions= attempted_questions + user_scores['attempted_questions']
        
        add_score.find_and_modify(
            {"user_id": user_id},
            {'user_id': user_id, 'score': new_score, 'attempted_questions': new_attempted_questions}
        )

        user_id = str(user_id)
        res = make_response(
            jsonify({'message': "successful", "id_to_be_passed": user_id}))
        return res

    else:
        users = mongo.db.name_age_gender
        user_id = request.args.get('id')
        # print("USERNAMEEEEE2 ", username )
        user_id = ObjectId(user_id)
        user_data = users.find_one({'_id': user_id})
        to_check=''
        if user_data['grade_selected_user']=="":
            to_check=str(user_data['selected_education_user'])
        else:
            to_check=str(user_data['grade_selected_user'])
        data_all=[]
        data={}
        data2={}
        data3={}
        # value.isdigit()
        print(user_data['grade_selected_user'])
        if to_check.isdigit():
            if int(to_check) <=8:
                data = list(questions.find(
                    {'q_level': str(to_check), 'question_type': 'type'}))
                data2= list(questions.find(
                    {'q_level': str(int(to_check)+1), 'question_type': 'type'}))
                data3 = list(questions.find(
                    {'q_level': str(int(to_check)+2), 'question_type': 'type'}))
                data_all.append(data)
                data_all.append(data2)
                data_all.append(data3)
            elif int(to_check) ==9:
                data = list(questions.find(
                    {'q_level': str(int(to_check)), 'question_type': 'type'}))
                data2= list(questions.find(
                    {'q_level': str(int(to_check)+1), 'question_type': 'type'}))
                data3 = list(questions.find(
                    {'q_level': "college", 'question_type': 'type'}))
                data_all.append(data)
                data_all.append(data2)
                data_all.append(data3)
        if len(to_check)>=2:
            data = list(questions.find(
                {'q_level': '10', 'question_type': 'type'}))
            data2= list(questions.find(
                {'q_level': "college", 'question_type': 'type'}))
            data3 = list(questions.find(
                {'q_level': "University", 'question_type': 'type'}))
            data_all.append(data)
            data_all.append(data2)
            data_all.append(data3)


        x_all=[]
        for i in data_all:
            # print(len(i))
            x = random.sample(range(len(i)), 3)
            # print(x)
            x_all.append(x)
        
        print("index of questions that have been selected randomly ", x)
        questions_to_send = []
        for index in range(len(data_all)):
            for i in x_all[index] :
                print( data_all[index][i]['actual_word'])
                temp = {'actual_word': "", 'image': data_all[index][i]['data']}
                temp['actual_word'] = data_all[index][i]['actual_word']
                data_of_one_question = temp
                questions_to_send.append(data_of_one_question)

        return render_template("screen3.html", data=questions_to_send)


@app.route('/q3_quiz', methods=['POST', 'GET'])
def q3_quiz():

    print("Q3 QUIZ", request.method)
    questions = mongo.db.Questions
    if request.method == 'POST':
        questions = mongo.db.Questions
        # <========Need to find correct answers here============>
        # correct_answers =
        score = 0
        attempted_questions=0
        mcqs_answers = request.get_json(force=True)
        print("Answers: ", mcqs_answers)

        for answers in mcqs_answers['selected']:
            if answers!= None:
                attempted_questions+=1
        for element in range(len(mcqs_answers['selected'])):
            if mcqs_answers['selected'][element] == mcqs_answers['correct_answers'][element]:
                score += 1

        user_id = mcqs_answers['query_variable_in_url']
        user_id = ObjectId(user_id)
        add_score = mongo.db.Scores

        user_scores = add_score.find_one({'user_id': user_id})
        new_score= score+ user_scores['score']
        new_attempted_questions= attempted_questions + user_scores['attempted_questions']
        
        add_score.find_and_modify(
            {"user_id": user_id},
            {'user_id': user_id, 'score': new_score, 'attempted_questions': new_attempted_questions}
        )

        user_id = str(user_id)
        res = make_response(
            jsonify({'message': "successful", "id_to_be_passed": user_id}))
        return res

    else:
        users = mongo.db.name_age_gender
        user_id = request.args.get('id')
        # print("USERNAMEEEEE2 ", username )
        user_id = ObjectId(user_id)
        user_data = users.find_one({'_id': user_id})
        
        to_check=''
        if user_data['grade_selected_user']=="":
            to_check=str(user_data['selected_education_user'])
        else:
            to_check=str(user_data['grade_selected_user'])
        data_all=[]
        data={}
        data2={}
        data3={}
        # value.isdigit()
        print(user_data['grade_selected_user'])
        if to_check.isdigit():
            if int(to_check) <=8:
                data = list(questions.find(
                    {'q_level': str(to_check), 'question_type': 'audio_word'}))
                data2= list(questions.find(
                    {'q_level': str(int(to_check)+1), 'question_type': 'audio_word'}))
                data3 = list(questions.find(
                    {'q_level': str(int(to_check)+2), 'question_type': 'audio_word'}))
                data_all.append(data)
                data_all.append(data2)
                data_all.append(data3)
            elif int(to_check) ==9:
                data = list(questions.find(
                    {'q_level': str(int(to_check)), 'question_type': 'audio_word'}))
                data2= list(questions.find(
                    {'q_level': str(int(to_check)+1), 'question_type': 'audio_word'}))
                data3 = list(questions.find(
                    {'q_level': "college", 'question_type': 'audio_word'}))
                data_all.append(data)
                data_all.append(data2)
                data_all.append(data3)
        if len(to_check)>=2:
            data = list(questions.find(
                {'q_level': '10', 'question_type': 'audio_word'}))
            data2= list(questions.find(
                {'q_level': "college", 'question_type': 'audio_word'}))
            data3 = list(questions.find(
                {'q_level': "University", 'question_type': 'audio_word'}))
            data_all.append(data)
            data_all.append(data2)
            data_all.append(data3)

        
        x_all=[]
        for i in data_all:
            # print(len(i))
            x = random.sample(range(len(i)), 3)
            # print(x)
            x_all.append(x)
        
        questions_to_send = []
        for index in range(len(data_all)):
            for i in x_all[index] : #add index to x[index]
                print(data_all[index][i]['data'])
                temp = {'actual_word': "", 'audio': data_all[index][i]['data'], 'option_1': "", #instead of image add data[index][i]['data']
                        'option_2': "", 'option_3': "", 'option_4': ""}
                options_to_be_selected = []
                index_of_options = random.sample(range(len(data_all[index][i]['options'])), 3)
                for index2 in index_of_options:
                    options_to_be_selected.append(data_all[index][i]['options'][index2])

                options_to_be_selected.append(data_all[index][i]['actual_word'])
                
                random.shuffle(options_to_be_selected)
                temp['actual_word'] = data_all[index][i]['actual_word']
                print(temp['actual_word'])
                temp['option_1'] = options_to_be_selected[0]
                temp['option_2'] = options_to_be_selected[1]
                temp['option_3'] = options_to_be_selected[2]
                temp['option_4'] = options_to_be_selected[3]
                data_of_one_question = temp
                questions_to_send.append(data_of_one_question)

        return render_template("screen4.html", data=questions_to_send)


@app.route('/q4_quiz', methods=['POST', 'GET'])
def q4_quiz():

    print("Q4 QUIZ", request.method)
    questions = mongo.db.Questions
    if request.method == 'POST':

        # <========Need to find correct answers here============>
        # correct_answers =
        score = 0
        attempted_questions=0
        mcqs_answers = request.get_json(force=True)
        print("Answers: ", mcqs_answers)

        for answers in mcqs_answers['entered']:
            if answers!= None:
                attempted_questions+=1
        for element in range(len(mcqs_answers['entered'])):
            if mcqs_answers['entered'][element] == mcqs_answers['correct_answers'][element]:
                score += 1
        for element in range(len(mcqs_answers['entered'])):
            data = list(questions.find({'actual_word': mcqs_answers['correct_answers'][element], 'question_type': 'audio_word'}))[0]
            print(data)
            if mcqs_answers['entered'][element] not in data['options'] and mcqs_answers['entered'][element] !='' :
                data['options'].append(mcqs_answers['entered'])
            
            questions.find_and_modify({"_id": data['_id']},
            {'question_type': data['question_type'], 'q_level': data['q_level'], 'actual_word': data['actual_word'],
                'options': data['options'], 'data': data['data']})

        user_id = mcqs_answers['query_variable_in_url']
        user_id = ObjectId(user_id)
        add_score = mongo.db.Scores

        user_scores = add_score.find_one({'user_id': user_id})
        new_score= score+ user_scores['score']
        new_attempted_questions= attempted_questions + user_scores['attempted_questions']
        
        add_score.find_and_modify(
            {"user_id": user_id},
            {'user_id': user_id, 'score': new_score, 'attempted_questions': new_attempted_questions}
        )

        user_id = str(user_id)
        res = make_response(
            jsonify({'message': "successful", "id_to_be_passed": user_id}))
        return res
    else:
        users = mongo.db.name_age_gender
        user_id = request.args.get('id')
        # print("USERNAMEEEEE2 ", username )
        user_id = ObjectId(user_id)
        user_data = users.find_one({'_id': user_id})
        to_check=''
        if user_data['grade_selected_user']=="":
            to_check=str(user_data['selected_education_user'])
        else:
            to_check=str(user_data['grade_selected_user'])
        data_all=[]
        data={}
        data2={}
        data3={}
        # value.isdigit()
        print(user_data['grade_selected_user'])
        if to_check.isdigit():
            if int(to_check) <=8:
                data = list(questions.find(
                    {'q_level': str(to_check), 'question_type': 'audio_word'}))
                data2= list(questions.find(
                    {'q_level': str(int(to_check)+1), 'question_type': 'audio_word'}))
                data3 = list(questions.find(
                    {'q_level': str(int(to_check)+2), 'question_type': 'audio_word'}))
                data_all.append(data)
                data_all.append(data2)
                data_all.append(data3)
            elif int(to_check) ==9:
                data = list(questions.find(
                    {'q_level': str(int(to_check)), 'question_type': 'audio_word'}))
                data2= list(questions.find(
                    {'q_level': str(int(to_check)+1), 'question_type': 'audio_word'}))
                data3 = list(questions.find(
                    {'q_level': "college", 'question_type': 'audio_word'}))
                data_all.append(data)
                data_all.append(data2)
                data_all.append(data3)
        if len(to_check)>=2:
            data = list(questions.find(
                {'q_level': '10', 'question_type': 'audio_word'}))
            data2= list(questions.find(
                {'q_level': "college", 'question_type': 'audio_word'}))
            data3 = list(questions.find(
                {'q_level': "University", 'question_type': 'audio_word'}))
            data_all.append(data)
            data_all.append(data2)
            data_all.append(data3)


        x_all=[]
        for i in data_all:
            # print(len(i))
            x = random.sample(range(len(i)), 3)
            # print(x)
            x_all.append(x)
        
        print("index of questions that have been selected randomly ", x)
        questions_to_send = []
        for index in range(len(data_all)):
            for i in x_all[index] :
                print( data_all[index][i]['actual_word'])
                print(data_all[index][i]['data'])
                temp = {'actual_word': "", 'audio': data_all[index][i]['data']}
                temp['actual_word'] = data_all[index][i]['actual_word']
                data_of_one_question = temp
                questions_to_send.append(data_of_one_question)
    
        return render_template("screen5.html", data=questions_to_send)


@app.route('/q5_quiz', methods=['POST', 'GET'])
def q5_quiz():
    print("Q4 QUIZ", request.method)
    questions = mongo.db.Questions
    if request.method == 'POST':
        # <========Need to find correct answers here============>
        # correct_answers =
        score = 0
        mcqs_answers = request.get_json(force=True)
        # print("Answers: " , mcqs_answers)
        # # for element in range(len(mcqs_answers['selected'])):
        #     if mcqs_answers['selected'][element] == mcqs_answers['correct_answers'][element]:
        #         score += 1
        user_id = mcqs_answers['query_variable_in_url']
        # print("USERNAMEEEEE2 ", username )
        user_id = ObjectId(user_id)
        # add_score = mongo.db.Scores
        # add_score.insert_one(
        #         {'user_id' : user_id, "quiz_type": "audio_word" , "score" : score }
        #         )
        user_id = str(user_id)
        res = make_response(
            jsonify({'message': "successful", "id_to_be_passed": user_id}))
        return res

    else:
        # users = mongo.db.name_age_gender
        # user_id = request.args.get('id')
        # # print("a ", username )
        # user_id = ObjectId(user_id)
        # user_data = users.find_one({'_id':user_id})
        # data = questions.find({'q_level': user_data['grade_selected_user']})
        # questions_to_send = list(data)
        # print("Data: " , questions_to_send)
        return render_template("screen6.html")


@app.route('/q6_quiz', methods=['POST', 'GET'])
def q6_quiz():
    print("Q6 QUIZ", request.method)
    questions = mongo.db.Questions
    if request.method == 'POST':
        questions = mongo.db.Questions
        score = 0
        mcqs_answers = request.get_json(force=True)
        print("Answers: ", mcqs_answers)

        user_id = mcqs_answers['query_variable_in_url']

        user_id = ObjectId(user_id)

        user_id = str(user_id)
        res = make_response(
            jsonify({'message': "successful", "id_to_be_passed": user_id}))
        return res

    else:

        return render_template("screen7.html")


@app.route('/q7_quiz', methods=['POST', 'GET'])
def q7_quiz():
    print("Q7 QUIZ", request.method)
    questions = mongo.db.Questions
    if request.method == 'POST':
        questions = mongo.db.Questions
        # <========Need to find correct answers here============>
        # correct_answers =
        score = 0
        mcqs_answers = request.get_json(force=True)
        print("Answers: ", mcqs_answers)
        # for element in range(len(mcqs_answers['selected'])):
        #     if mcqs_answers['selected'][element] == mcqs_answers['correct_answers'][element]:
        #         score += 1
        user_id = mcqs_answers['query_variable_in_url']
        # print("USERNAMEEEEE2 ", username )
        user_id = ObjectId(user_id)
        # add_score = mongo.db.Scores
        # add_score.insert_one(
        #         {'user_id' : user_id, "quiz_type": "audio_word" , "score" : score }
        #         )
        user_id = str(user_id)
        res = make_response(
            jsonify({'message': "successful", "id_to_be_passed": user_id}))
        return res

    else:
        # users = mongo.db.name_age_gender
        # user_id = request.args.get('id')
        # # print("USERNAMEEEEE2 ", username )
        # user_id = ObjectId(user_id)
        # user_data = users.find_one({'_id':user_id})
        # data = questions.find({'q_level': user_data['grade_selected_user']})
        # questions_to_send = list(data)
        # print("Data: " , questions_to_send)
        return render_template("screen8.html")


@app.route('/test_start_1', methods=['POST', 'GET'])
def test_start_1():

    print("method is test_start_1 : ", request.method)

    if request.method == 'POST':
        res = make_response(jsonify({'message': "successful"}))
        return res
    else:
        return render_template('test1_start_page.html')


@app.route('/test_start_2', methods=['POST', 'GET'])
def test_start_2():

    print("method2 is : ", request.method)

    if request.method == 'POST':
        res = make_response(jsonify({'message': "successful"}))
        return res
    else:
        return render_template('test2_start_page.html')


@app.route('/test_start_5', methods=['POST', 'GET'])
def test_start_5():

    print("method2 is : ", request.method)

    if request.method == 'POST':
        res = make_response(jsonify({'message': "successful"}))
        return res
    else:
        return render_template('test5_start_page.html')


@app.route('/test_start_6', methods=['POST', 'GET'])
def test_start_6():

    print("method2 is : ", request.method)

    if request.method == 'POST':
        res = make_response(jsonify({'message': "successful"}))
        return res
    else:
        return render_template('test6_start_page.html')


@app.route('/test_start_7', methods=['POST', 'GET'])
def test_start_7():

    print("method2 is : ", request.method)

    if request.method == 'POST':
        res = make_response(jsonify({'message': "successful"}))
        return res
    else:
        return render_template('test7_start_page.html')


@app.route('/test_start_8', methods=['POST', 'GET'])
def test_start_8():

    print("method2 is : ", request.method)

    if request.method == 'POST':
        res = make_response(jsonify({'message': "successful"}))
        return res
    else:
        return render_template('test8_start_page.html')


@app.route('/redirecttohomepage', methods=['POST', 'GET'])
def redirecttohomepage():

    print("method2 is : ", request.method)

    if request.method == 'POST':
        res = make_response(jsonify({'message': "successful"}))
        return res
    else:
        return render_template('homepage.html')


if (__name__ == '__main__'):
    app.secret_key = "abcd"
    app.run(debug=True)
    
