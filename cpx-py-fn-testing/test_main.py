# test_main.py
import unittest
from main__ import main

class TestMainFunction(unittest.TestCase):
    def test_without_name_param(self):
        params = {}
        result = main(params)

        expected = {
            "headers": {'Content-Type': 'text/html; charset=utf-8'},
            "statusCode": 200,
            "body": "1.26.2",
        }

        self.assertEqual(result, expected)

if __name__ == '__main__':
    unittest.main()
