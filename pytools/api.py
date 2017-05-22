from __future__ import print_function
import sys
import zerorpc

class CalcApi(object):
    def calc(self, text):
        """based on the input text, return the int result"""
        try:
            return text
        except Exception as e:
            return 0.0
    def echo(self, text):
        """echo any text"""
        return text


def main():
    addr = 'tcp://127.0.0.1:8082'
    s = zerorpc.Server(CalcApi())
    s.bind(addr)
    print('start running on {}'.format(addr))
    s.run()

if __name__ == '__main__':
    main()