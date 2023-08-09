<?php

// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

// Allow from any origin

include 'database.php';

$ret = array(
    'status' => '0',
    'data' => ''
);

if (isset($_POST['data'])) {
    $data = $_POST['data'];
    $name = $_POST['name'];

    $sql = "UPDATE term SET content='$data' WHERE `id`=1;";
    if (mysqli_query($conn, $sql)) {
        $ret['data'] = "Updated successfully !";
        $ret['status'] = '1';
    } else {
        $ret['data'] = "Error: " . $sql . "" . mysqli_error($conn);
    }
    mysqli_close($conn);
    echo json_encode($ret);
} else {

    $query = "SELECT * FROM term;";
    $result = $conn->query($query);
    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = array(
            "content" => $row['content']
        );

    }
    echo json_encode($data);
}
?>