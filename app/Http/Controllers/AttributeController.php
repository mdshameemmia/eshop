<?php

namespace App\Http\Controllers;

use Exception;
use Inertia\Inertia;
use App\Models\Category;
use App\Models\Attribute;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class AttributeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Attribute/Index', [
            'attributes'   => Attribute::all(),
            'message'   => Session::has('message') ? Session::get('message') : null,
            'columns'   => Attribute::$indexColumnKeys
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Attribute/Create", ['csrfToken' => csrf_token()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        try {
            $data = $request->except('_token');
            Attribute::create($data);

            return redirect()->route('attributes.index')->with('message', 'Successfully stored');
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
    public function edit(Attribute $attribute)
    {
        return Inertia::render('Attribute/Edit', [
            'csrfToken' => csrf_token(),
            'attribute'    => $attribute
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Attribute $attribute)
    {
        try {
            $data = $request->except('_token');
            $attribute->update($data);

            return redirect()->route('attributes.index')->with('message', 'Successfully updated');
        } catch (Exception $e) {
            return response()->json([
                'message'   => $e->getMessage()
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Attribute $attribute)
    {
        try {
            $attribute->delete();
            return redirect()->route('attributes.index')->with('message', "Successfully deleted");
        } catch (Exception $e) {
            return response()->json([
                'message'   => $e->getMessage()
            ]);
        }
    }
}
