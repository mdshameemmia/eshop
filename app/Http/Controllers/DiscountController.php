<?php

namespace App\Http\Controllers;

use Exception;
use Inertia\Inertia;
use App\Models\Discount;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class DiscountController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Discount/Index', [
            'attributes'   => Discount::all(),
            'message'   => Session::has('message') ? Session::get('message') : null,
            'columns'   => Discount::$indexColumnKeys
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Discount/Create", ['csrfToken' => csrf_token()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        try {
            $data = $request->except('_token');
            Discount::create($data);

            return redirect()->route('discounts.index')->with('message', 'Successfully stored');
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
    public function edit(Discount $discount)
    {
        return Inertia::render('Discount/Edit', [
            'csrfToken' => csrf_token(),
            'discount'    => $discount
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Discount $discount)
    {
        try {
            $data = $request->except('_token');
            $discount->update($data);

            return redirect()->route('discounts.index')->with('message', 'Successfully updated');
        } catch (Exception $e) {
            return response()->json([
                'message'   => $e->getMessage()
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Discount $discount)
    {
        try {
            $discount->delete();
            return redirect()->route('discounts.index')->with('message', "Successfully deleted");
        } catch (Exception $e) {
            return response()->json([
                'message'   => $e->getMessage()
            ]);
        }
    }
}
