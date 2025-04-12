#include <iostream>
#include <string>
using namespace std;

int main() {
    int n;  // Number of statements
    cin >> n;

    int x = 0;  // Initialize the variable x to 0

    // Process each statement
    for (int i = 0; i < n; ++i) {
        string statement;
        cin >> statement;  // Read each statement
        
        // Check if the operation is increment or decrement
        if (statement == "++X" || statement == "X++") {
            x += 1;  // Increment the value of x
        } else if (statement == "--X" || statement == "X--") {
            x -= 1;  // Decrement the value of x
        }
    }

    // Output the final value of x
    cout << x << endl;

    return 0;
}



