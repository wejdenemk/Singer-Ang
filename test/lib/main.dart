import 'package:flutter/material.dart';

import './question.dart';
import './answer.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return MyAppState();
  }
}

class MyAppState extends State<MyApp> {
  var quesIndex = 0;
  void answer() {
    setState(() {
      quesIndex += 1;
    });
    print(quesIndex);
  }

  @override
  Widget build(BuildContext context) {
    var questions = [
      {
        'qtext': "what'/s your fav color",
        'answ': ["black", "blue", "red", "white"]
      },
      {
        'qtext': "what'/s your fav animal",
        'answ': ["lion", "tiger", "dog", "cat"]
      },
      {
        'qtext': "what'/s your fav place",
        'answ': ["home", "hell", "beach", "bar"]
      }
    ];
    return MaterialApp(
      home: Scaffold(
          appBar: AppBar(
            title: Text("ma app"),
          ),
          body: Column(
            children: [
              Ques(
                questions[quesIndex]['qtext'],
              ),
              //to complete ///////////////////////////////////////
            ],
          )),
    );
  }
}
