<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppController extends Controller
{
    public function about()
    {
        $name = "John Doe";
        return inertia("About", [
            "name" => $name
        ]);
    }
}
