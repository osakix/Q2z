# C++ Tutorial

## Beginner
```cpp
#include <iostream>
int main() {
    std::cout << "Hello World" << std::endl;
    return 0;
}
```

## Intermediate
```cpp
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> nums{1,2,3,4,5};
    std::for_each(nums.begin(), nums.end(), [](int n){
        std::cout << n << std::endl;
    });
}
```

## Advanced
```cpp
#include <iostream>
#include <string>

class Greeter {
public:
    void greet(const std::string& name) {
        std::cout << "Hello " << name << std::endl;
    }
};

int main() {
    Greeter g;
    g.greet("World");
}
```
