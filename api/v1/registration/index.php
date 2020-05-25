<?php
  include_once '../Crud.php';
   class registeration extends Crud{
        public function __construct()
        {
            parent::__construct();
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
            header('Access-Control-Allow-Headers: token, Content-Type');
            header('Access-Control-Max-Age: 1728000');
            header('Content-Length: 0');
            header('Content-Type: text/plain');
        }
        /**
         * Insert Data into Database
         */
        public function create_data($data){
            $data = json_decode(json_encode($data) , true);
            $name = $data['name'];
            $email = $data['email'];
            $mono = $data['mono'];
            $password = $data['password'];
            $query = "INSERT INTO user (name, email, mono, password)
            VALUES ('$name', '$email', '$mono', '$password')";
            $response = $this->execute($query);
            if($response){
                echo "Record created successfully";
            }
        }

        /**
         * Fetch Data from Database.
         */
        public function get_data($data){
            $data = json_decode(json_encode($data) , true);
            $email = $data['email'];
            $password = $data['password'];
            $query = "SELECT * from user";
            $row = $this->getData($query);
            return $row;
            // print_r($row);
        }


        /**
         * Login functionality
         */
        public function login($data){
            $data = json_decode(json_encode($data) , true);
            $email = $data['email'];
            $password = $data['password'];
            $query = "SELECT name, email from user where email='$email' AND password='$password'";
            $row = $this->getData($query);
            return $row;
            // print_r($row);
        }


        /**
         * Update Data into Database.
         */
        public function update_data($data){
            $data = json_decode(json_encode($data) , true);
            $name = $data['name'];
            $email = $data['email'];
            $mono = $data['mono'];
            $password = $data['password'];
            $id = $data['id'];
            $query = "SELECT * from user where id=".$id;
            $row = $this->getData($query);
            if(count($row)){
                $query = "UPDATE user set name ='$name', email='$email', mono='$mono', password='$password' where id=".$id;
                $response = $this->execute($query);
                if($response){
                    echo "Record updated successfully";
                }
            }else{
                echo "Record did't matched";
            }
        }

        /**
         * Delete Data from Database.
         */
        public function remove_data($data){
            $data = json_decode(json_encode($data) , true);
            $name = $data['name'];
            $email = $data['email'];
            $mono = $data['mono'];
            $password = $data['password'];
            $id = $data['id'];
            $query = "SELECT * from user where id=".$id;
            $row = $this->getData($query);
            if(count($row)){
                $query = "DELETE FROM user WHERE id = $id";
                $response = $this->delete($query);
                if($response){
                    echo "Record deleted successfully";
                }
            }else{
                echo "Record did't matched";
            }
            
        }

   }
    $registeration = new registeration();
    $method =  $_SERVER['REQUEST_METHOD'];
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    
    switch($method) {
        case 'POST':
            $registeration->create_data($data);
        break;

        case 'PUT':
            $registeration->update_data($data);
        break;

        case 'DELETE':
            $registeration->remove_data($data);
        break;

        case 'GET':
            $registeration->get_data($data);
        break;

        default:
            header('HTTP/1.1 405 Method Not Allowed');
            header('Allow: GET, PUT, DELETE');
        break;
    }
?>