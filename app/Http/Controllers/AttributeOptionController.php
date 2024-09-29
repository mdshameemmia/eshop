<?php

namespace App\Http\Controllers;

use App\Http\Resources\AttributeOptionResource;
use Exception;
use Inertia\Inertia;
use App\Models\Attribute;
use Illuminate\Http\Request;
use App\Models\AttributeOption;
use Illuminate\Support\Facades\Session;

class AttributeOptionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $attributeOptions  = AttributeOptionResource::collection(AttributeOption::all());

        return Inertia::render('AttributeOption/Index', [
            'attributeOptions'   => $attributeOptions,
            'message'   => Session::has('message') ? Session::get('message') : null,
            'columns'   => AttributeOption::$indexColumnKeys
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("AttributeOption/Create", [
            'csrfToken' => csrf_token(),
            'attributes'=> Attribute::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        try {
            $data = $request->except('_token');
            AttributeOption::create($data);

            return redirect()->route('attribute-options.index')->with('message', 'Successfully stored');
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
    public function edit(AttributeOption $attributeOption)
    {
        return Inertia::render('AttributeOption/Edit', [
            'csrfToken' => csrf_token(),
            'attributeOption'    => $attributeOption,
            'attributes'=> Attribute::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, AttributeOption $attributeOption)
    {
        try {
            $data = $request->except('_token');
            $attributeOption->update($data);

            return redirect()->route('attribute-options.index')->with('message', 'Successfully updated');
        } catch (Exception $e) {
            return response()->json([
                'message'   => $e->getMessage()
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AttributeOption $attributeOption)
    {
        try {
            $attributeOption->delete();
            return redirect()->route('attribute-options.index')->with('message', "Successfully deleted");
        } catch (Exception $e) {
            return response()->json([
                'message'   => $e->getMessage()
            ]);
        }
    }
}
