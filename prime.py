def is_prime(n):
    """
    Check if a number is prime.

    Parameters:
    n (int): The number to be checked.

    Returns:
    bool: True if the number is prime, False otherwise.
    """
    if n <= 1:
        return False
    if n == 2:
        return True
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

import unittest
from prime import is_prime

class TestPrime(unittest.TestCase):
    def test_negative(self):
        self.assertFalse(is_prime(-1))

    def test_zero(self):
        self.assertFalse(is_prime(0))

    def test_one(self):
        self.assertFalse(is_prime(1))

    def test_two(self):
        self.assertTrue(is_prime(2))

    def test_prime_number(self):
        self.assertTrue(is_prime(7))

    def test_non_prime_number(self):
        self.assertFalse(is_prime(9))

if __name__ == '__main__':
    unittest.main()