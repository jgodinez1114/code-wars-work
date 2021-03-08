/* Take 2 strings s1 and s2 including only letters from a to z. return a new sorted string, the longest
possible, containing distinct letters - each taken only once - coming from s1 or s2
*/

# include <string>
# include <set>
# include <iostream>

// NOTE: npos is a constant value for the gr8tst possible value for an element

class TwoToOne{
    public:             
    static std::string longest(const std::string &s1, const std::string &s2);
}
// function to return longest string w/o repeated characters
std::string TwoToOne::longest(const std::string &s1, const std::string &s2){
    // concatenate
    std::string s3 = s1 + s2;
    std::string noDuplicates = "";

    //iterate a-z
    for (auto character : (std::string("abcdefghijklmnopqrstuvwxyz"))){
        // check if concatenated string contains any letters from a-z
        //chcek if alphabet character is not equal to "no mateches"
        if (character != std::string::npos)
    }
}