# test_main.py
import unittest
from main__ import main

class TestMainFunction(unittest.TestCase):
    def test_with_name_param(self):
        params = {"name": "John"}
        result = main(params)

        expected = {
            "headers": {'Content-Type': 'text/html; charset=utf-8'},
            "statusCode": 200,
            "body": f"<html><body><h3>Hello, {params['name']}!</h3></body></html>",
        }

        self.assertEqual(result, expected)


    def test_without_name_param(self):
        params = {}
        result = main(params)

        expected = {
            "headers": {'Content-Type': 'text/html; charset=utf-8'},
            "statusCode": 200,
            "body": "<html><body><h3>Hello, Functions on Code Engine!</h3></body></html>",
        }

        self.assertEqual(result, expected)

if __name__ == '__main__':
    unittest.main()
