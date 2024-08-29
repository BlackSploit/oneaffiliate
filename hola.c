#include <stdio.h>

// Function prototypes for step-by-step evaluation
int evaluateStep1(int a, int b, int c);
int evaluateStep2(int a, int b, int c);
int evaluateStep3(int a, int b, int c);
int evaluateStep4(int a, int b, int c);

int main() {
    int a = 10, b = 20, c = 30;
    int result;

    // Example complex expression
    // Expression: (a + b) * (c / (b - a) % 3) + (a << 2) - (b >> 1) ^ (c & a)
    result = (a + b) * (c / (b - a) % 3) + (a << 2) - (b >> 1) ^ (c & a);

    // Breakdown of evaluation steps:
    printf("Step 1: Evaluate (b - a) = %d - %d = %d\n", b, a, b - a);
    printf("Step 2: Evaluate (c / (b - a)) = %d / %d = %d\n", c, b - a, c / (b - a));
    printf("Step 3: Evaluate (c / (b - a) % 3) = %d %% 3 = %d\n", c / (b - a), (c / (b - a)) % 3);
    printf("Step 4: Evaluate (a + b) = %d + %d = %d\n", a, b, a + b);
    printf("Step 5: Evaluate (a + b) * (c / (b - a) %% 3) = %d * %d = %d\n", a + b, (c / (b - a)) % 3, (a + b) * (c / (b - a) % 3));
    printf("Step 6: Evaluate (a << 2) = %d << 2 = %d\n", a, a << 2);
    printf("Step 7: Evaluate (b >> 1) = %d >> 1 = %d\n", b, b >> 1);
    printf("Step 8: Evaluate (c & a) = %d & %d = %d\n", c, a, c & a);
    printf("Step 9: Evaluate (a << 2) - (b >> 1) = %d - %d = %d\n", a << 2, b >> 1, (a << 2) - (b >> 1));
    printf("Step 10: Evaluate ((a + b) * (c / (b - a) %% 3) + (a << 2) - (b >> 1)) ^ (c & a) = %d ^ %d = %d\n",
           (a + b) * (c / (b - a) % 3) + (a << 2) - (b >> 1), c & a,
           (a + b) * (c / (b - a) % 3) + (a << 2) - (b >> 1) ^ (c & a));

    // Final result
    printf("Final Result: %d\n", result);

    return 0;
}

// Function implementations for step-by-step evaluation (optional for additional breakdown)
int evaluateStep1(int a, int b, int c) {
    return b - a;
}

int evaluateStep2(int a, int b, int c) {
    return c / (b - a);
}

int evaluateStep3(int a, int b, int c) {
    return c / (b - a) % 3;
}

int evaluateStep4(int a, int b, int c) {
    return a + b;
}

int evaluateStep5(int a, int b, int c) {
    return (a + b) * (c / (b - a) % 3);
}

int evaluateStep6(int a, int b, int c) {
    return a << 2;
}

int evaluateStep7(int a, int b, int c) {
    return b >> 1;
}

int evaluateStep8(int a, int b, int c) {
    return c & a;
}

int evaluateStep9(int a, int b, int c) {
    return (a << 2) - (b >> 1);
}

int evaluateStep10(int a, int b, int c) {
    return (a + b) * (c / (b - a) % 3) + (a << 2) - (b >> 1) ^ (c & a);
}
