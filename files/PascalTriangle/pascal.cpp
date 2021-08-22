#include <iostream>
#include <vector>
#include <string>
#include "helpers.h"

int main()
{
	std::cout << "Enter the number of rows" << std::endl;
	int input;
	std::cin >> input;
	printTriangle(generateTriangle(input));
}
