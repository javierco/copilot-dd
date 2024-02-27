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