import 'package:flutter/material.dart';
import 'package:flutter_application_1/immutable_widget.dart';
import 'package:flutter_application_1/text_layout.dart';

class BasicScreen extends StatelessWidget {
  const BasicScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          backgroundColor: Colors.indigo,
          title: Text('Welcome to Flutter'),
          actions: <Widget>[
            Padding(
              padding: const EdgeInsets.all(10.0),
              child: Icon(Icons.edit),
            )
          ]),
      body: Column(crossAxisAlignment: CrossAxisAlignment.start, 
      children: <Widget> [
        Image.asset('assets/img.jpg'),
        TextLayout()
      ]),
      drawer: Drawer(
          child: Container(
              color: Colors.lightBlue, child: Text("I'm a Drawer ! "))),
    );
  }
}
