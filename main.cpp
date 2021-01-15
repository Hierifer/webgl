#include <iostream>

using namespace std;

int
main(int argc, char** argv)
{
  glfwInit();

  GLFwindow* window = glfwCreateWindow(640,480, "Triangles", NULL, NULL);

  glfwMakeContextCurrent(window);
  gl3wInit();

  init();

  while(!glfwWindowShouldClose(window))
  {
    display();
    glfwSwapBuffers(window);
    glfwPollEvents();
  }

  glfwDestoryWindow(window);

  glfwTerminate();
}