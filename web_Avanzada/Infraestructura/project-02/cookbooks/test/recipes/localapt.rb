execute "add line" do
	user "root"
	group "admin"
	cwd "/tmp"
	command "echo 'Acquire::http::Proxy \"http://192.168.131.29:3128\";'> /etc/apt/apt.conf"
	action :run
end
