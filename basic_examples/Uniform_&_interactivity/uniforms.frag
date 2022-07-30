precision mediump float;//lowp / mediump/highp

#define PI 3.14159265359
#define TWO_PI 6.28318530718

uniform vec2 resolution;
uniform float time;
uniform float mouse;

// Normalize rgb value from 0-255 to 0.0-1.0
vec3 rgb(float r, float g, float b){
  return vec3(r / 255.0, g / 255.0, b / 255.0);
}

vec4 poly(float x, float y, float size, float sides, float rotation, vec3 color){
  vec2 coord = gl_FragCoord.xy;// get our coordinates
  vec2 pos = vec2(x,y) - coord;// move the coordinates to where we want to draw the shape
  float angle = atan(pos.x, pos.y) + PI + rotation;// calculate the angle of a pixel relative to our position
  float radius = TWO_PI / sides;// calculate the size of our shape

  // this is the function that controls our shapes appearance
  // i pulled it from the book of shaders shapes page https://thebookofshaders.com/07/
  // essentially what we are doing here is computing a circle with length(pos) and manipulating it's shape with the cos() function
  // this technique is really powerful and can be used to create all sorts of different shapes
  // for instance, try changing cos() to sin()
  float d = cos(floor(0.5 + angle / radius) * radius - angle) * length(pos) * 1.0;

  // restrict our shape to black and white and set it's size
  // we use the smoothstep function to get a nice soft edge
  d = 1.0 - smoothstep(size, size+1.0, d);

  // return the color with the shape as the alpha channel
  return vec4(color, d);
}


void main() {

  vec2 center = resolution / 2.0; // draw the shape at the center of the screen
  float size = resolution.y * 0.25; // make the shape a quarter of the screen height
  float sides = mod(floor(mouse), 7.0) + 3.0; // slowly increase the sides, when it reaches 10 sides, go back down to 3
  float rotation = time*1.0; // rotation is in radians, but for time it doesnt really matter

  // lets make our shape in the center of the screen. We have to subtract half of it's width and height just like in p5
  float x = center.x;
  float y = center.y;

  // a color for the shape
  vec3 shapeColor = rgb(200.0, 240.0, 200.0);

  // call our shape function with poly(x, y, sz, sides, rotation, color);
  vec4 poly = poly(center.x , center.y, size, sides, rotation, shapeColor);

  // mix the polygon with the opposite of the green color according to the shapes alpha
  poly.rgb = mix(1.0 - shapeColor, poly.rgb, poly.a);

  // render to screen
  gl_FragColor = vec4(poly.rgb, 1.0);
}
