<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Slider;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $sliders = Slider::where('status', 1)->get();
        return Inertia::render("Welcome", [
            'sliders'   => $sliders
        ]);
    }
}
