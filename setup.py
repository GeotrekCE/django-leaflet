import os
from setuptools import setup, find_packages

here = os.path.abspath(os.path.dirname(__file__))

requires = [
    'Django',
]


setup(
        name='django-leaflet',
        version='0.19.0+geotrek9',
        author='Mathieu Leplatre',
        author_email='mathieu.leplatre@makina-corpus.com',
        url='https://github.com/makinacorpus/django-leaflet',
        download_url="http://pypi.python.org/pypi/django-leaflet/",
        description="Use Leaflet in your django projects",
        long_description=codecs.open(
            os.path.join(
                here, 'README.rst'), 'r', 'utf-8').read() + '\n\n' +
                         codecs.open(
                             os.path.join(here, 'CHANGES'), 
                             'r', 'utf-8').read(),
        license='LPGL, see LICENSE file.',
        install_requires=requires,
        packages=find_packages(),
        include_package_data=True,
        zip_safe=False,
        classifiers=[
          'Topic :: Utilities',
          'Natural Language :: English',
          'Operating System :: OS Independent',
          'Intended Audience :: Developers',
          'Environment :: Web Environment',
          'Framework :: Django',
          'Development Status :: 5 - Production/Stable',
          'Programming Language :: Python :: 3.8'
       ],
)
