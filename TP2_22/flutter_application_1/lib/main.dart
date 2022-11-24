import 'package:flutter/material.dart';
import 'package:flutter_application_1/basic_screen.dart';
import 'package:flutter_application_1/immutable_widget.dart';


void main() => runApp(StaticApp());

class StaticApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: BasicScreen(),
    );
  }
}
