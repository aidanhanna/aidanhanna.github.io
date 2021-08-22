#pragma once
#include <iostream>
#include <vector>
#include <string>

void addRow(std::vector< std::vector<int> >& triangle)
{
	//adds 1 as first term as new vector
	triangle.push_back({1});
	int height = triangle.size();

	//for all rows after first, adds remaining terms
	if (height > 2)
	{
		//for easier reference
		std::vector<int>& current = triangle[height - 1];
		std::vector<int> previous = triangle[height - 2];
		//adds all middle terms
		for (int index = 0; index < height - 2; index++)
		{
			current.push_back(previous[index] + previous[index + 1]);
		}
	}

	//adds trailing 1
	if (height > 1)
	{
		triangle.back().push_back(1);
	}
}

//this function was created to prevent too much nesting
std::vector< std::vector<int> > generateTriangle(int rows)
{
	//creates nested vectors for storage
	std::vector< std::vector<int> > triangle = {};
	for (int row = 0; row < rows; row++)
	{
		//adds vector for next row
		addRow(triangle);
	}

	return triangle;
}

void printTriangle(const std::vector< std::vector<int> >& triangle)
{
	//stores string-ified lines
	std::vector<std::string> stringTriangle = {};

	for (int row = 0; row < triangle.size(); row++)
	{
		//converts each row to a string with spaces between each number
		std::string stringRow = std::to_string(triangle[row][0]);
		for (int index = 1; index < triangle[row].size(); index++)
		{
			stringRow += " " + std::to_string(triangle[row][index]);
		}
		stringTriangle.push_back(stringRow);
	}

	int maxLength = stringTriangle.back().length();
	for (int row = 0; row < triangle.size(); row++)
	{
		//prints spaces to center each line
		std::cout << std::string((maxLength - stringTriangle[row].length()) / 2, ' ');
		std::cout << stringTriangle[row] << std::endl;
	}
}
