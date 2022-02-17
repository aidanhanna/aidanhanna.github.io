#include <iostream>
#include <vector>


//utility function for ease of display
void printVector(std::vector<int> vec)
{
	for (int i = 0; i < vec.size(); i++)
	{
		std::cout << vec[i] << " ";
	}
	std::cout << std::endl;
}

//used to show current state of the pegs
void printPegs(std::vector< std::vector<int> >& pegs)
{
	std::cout << std::endl << "| ";
	printVector(pegs[0]);
	std::cout << "| " << std::endl << "| ";
	printVector(pegs[1]);
	std::cout << "| " << std::endl << "| ";
	printVector(pegs[2]);
	std::cout << std::endl;
}


//used to actually solve the puzzle
void moveStack(std::vector< std::vector<int> >& pegs, int height, int start, int end, int other, bool showMove, int& count)
{
	//keep track of movements
	count++;
  
	if (height == 1) //only one to move
	{
		//move single piece
		pegs[end].push_back(pegs[start].back());
		pegs[start].pop_back();

		//show current state if desired
		if (showMove)
		{
			printPegs(pegs);
		}
		return;
	}

	//move all smaller pieces of of top
	moveStack(pegs, height - 1, start, other, end, showMove, count);
	//move bottom piece of current section
	pegs[end].push_back(pegs[start].back());
	pegs[start].pop_back();

	//show current state if desired
	if (showMove)
	{
		printPegs(pegs);
	}

	//move remaining stack to end peg
	moveStack(pegs, height - 1, other, end, start, showMove, count);
	
}


int main()
{
	//decide how large to make the initial stack
	int n;
	std::cout << "Enter the height of the starting tower: ";
	std::cin >> n;
	std::cout << std::endl;
	//decide whether to show iterations
	bool showEachMove;
	std::cout << "Display each move? (1 for yes, 0 for no): ";
	std::cin >> showEachMove;
	std::cout << std::endl;

	//create pegs
	std::vector< std::vector<int> > pegs;
	pegs.push_back(std::vector<int>());
	pegs.push_back(std::vector<int>());
	pegs.push_back(std::vector<int>());

	//create stack on first peg
	for (int i = n; i > 0; i--)
	{
		pegs[0].push_back(i);
	}
	printPegs(pegs);

	//solve the puzzle
	int count = 0;
	moveStack(pegs, n, 0, 2, 1, showEachMove, count);

	std::cout << "Finished in " << count << " moves" << std::endl;
	printPegs(pegs);
}
