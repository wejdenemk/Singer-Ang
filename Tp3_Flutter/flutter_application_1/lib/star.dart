
import 'package:flutter/material.dart';

class Star extends StatelessWidget {
  final Color? color;
  final double? size;

  const Star({
    Key? key,
    this.color,
    this.size,
  }): super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: size,
      height: size,
      child: CustomPaint(painter:_StarPainter(Colors.green),),
    );
}
}

class _StarPainter extends CustomPainter{
  final Color color;
  _StarPainter(this.color);
  @override 
  void paint(Canvas canvas , Size size){}
  @override 
  bool shouldRepaint(CustomPainter oldDelegate){
    return false;
  }
}