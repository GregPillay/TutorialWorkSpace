using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Guessing_Game
{
    internal class Program
    {   // Define a secrect word and the user needs to guess it.
        // Use of IF and while statements.
        static void Main(string[] args)
        {
            string SecretWord = "Giraffe"
                ;
            string Guess = "";

            int GuessCount = 0;

            int GuessLimit = 3;

            bool OutOfGuess = false;    

            //Keep prompting the user until the condition is false.

            
            while (Guess != SecretWord && !OutOfGuess)
            {  if (GuessCount <= GuessLimit)
                {
                    Console.WriteLine("Enter the Guess Word :  ");
                    Guess = Console.ReadLine();
                    GuessCount++;    
                }

                else {
                    
                    if (OutOfGuess == false) {
                        break;

                    }
                    Console.ReadLine();

                }
               
                Console.ReadLine();
            }

            if (Guess == SecretWord)
            {
                Console.Write("You are correct!!!");

                Console.ReadLine();
            }

            else
            {
                Console.Write("You are out of attempts!!!");

                Console.ReadLine();
            }
           

        }
    }
}
