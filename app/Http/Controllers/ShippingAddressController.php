<?php

namespace App\Http\Controllers;

use Exception;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\ShippingAddress;
use Illuminate\Support\Facades\Session;
use App\Http\Resources\ShippingAddressResource;

class ShippingAddressController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $shippingAddresses  = ShippingAddressResource::collection(ShippingAddress::all());
        
        return Inertia::render('ShippingAddress/Index', [
            'shippingAddresses'   => $shippingAddresses,
            'message'   => Session::has('message') ? Session::get('message') : null,
            'columns'   => ShippingAddress::$indexColumnKeys
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("ShippingAddress/Create", ['csrfToken' => csrf_token()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        try {
            $data = $request->except('_token');
            $data['user_id'] = auth()->user()->id;
            ShippingAddress::create($data);

            return redirect()->route('shipping-addresses.index')->with('message', 'Successfully stored');
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
    public function edit(ShippingAddress $shippingAddress)
    {
        return Inertia::render('ShippingAddress/Edit', [
            'csrfToken' => csrf_token(),
            'shippingAddress'    => $shippingAddress
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ShippingAddress $shippingAddress)
    {
        try {
            $data = $request->except('_token');
            $shippingAddress->update($data);

            return redirect()->route('shipping-addresses.index')->with('message', 'Successfully updated');
        } catch (Exception $e) {
            return response()->json([
                'message'   => $e->getMessage()
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ShippingAddress $shippingAddress)
    {
        try {
            $shippingAddress->delete();
            return redirect()->route('shipping-addresses.index')->with('message', "Successfully deleted");
        } catch (Exception $e) {
            return response()->json([
                'message'   => $e->getMessage()
            ]);
        }
    }
}
