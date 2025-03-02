FROM httpd:2.4

# Copy Apache configuration file
COPY docker/apache/apache.conf /usr/local/apache2/conf/httpd.conf

# Set working directory
WORKDIR /var/www/html

# Copy existing application directory contents
COPY dist/ /var/www/html
