import 'package:flutter/material.dart';


class Answ extends StatelessWidget {
  final answerr ; 

  Answ(this.answerr);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      child: ElevatedButton(
        child: Text("answer 1"),
        onPressed:answerr,
      ),
    );
  }
}
