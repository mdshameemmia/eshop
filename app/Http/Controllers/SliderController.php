<?php

namespace App\Http\Controllers;

use Exception;
use Inertia\Inertia;
use App\Models\Slider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Session;

class SliderController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Slider/Index', [
            'sliders'   => Slider::all(),
            'message'   => Session::has('message') ? Session::get('message') : null,
            'columns'   => Slider::$indexColumnKeys
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Slider/Create", ['csrfToken' => csrf_token()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        try {
            $path = $request->file('img')->store('uploads');
            $data = $request->except('_token');
            $data['img'] = $path;

            Slider::create($data);

            return redirect()->route('sliders.index')->with('message', 'Successfully stored');
        } catch (Exception $e) {
            return response()->json([
                'message'   => $e->getMessage()
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Slider $slider)
    {
        return Inertia::render('Slider/Edit', [
            'csrfToken' => csrf_token(),
            'slider'    => $slider
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Slider $slider)
    {
        try {

            if(!$slider->id){
                $slider = Slider::findOrFail($request->id);
            }

            $data = $request->except('_token');
            $path = null;
            if ($request->file('img')) {
                $path = $request->file('img')->store('uploads');
            } else {
                $path = $slider->img;
            }
            $data['img'] = $path;

            $slider->update($data);

            return redirect()->route('sliders.index')->with('message', 'Successfully updated');
        } catch (Exception $e) {
            return response()->json([
                'message'   => $e->getMessage()
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Slider $slider)
    {
        try {
            $slider->delete();
            return redirect()->route('sliders.index')->with('message', "Successfully deleted");
        } catch (Exception $e) {
            return response()->json([
                'message'   => $e->getMessage()
            ]);
        }
    }
}
