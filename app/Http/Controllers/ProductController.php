<?php

namespace App\Http\Controllers;

use Exception;
use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class ProductController extends Controller
{
   /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();

        return Inertia::render('Product/Index', [
            'products'   => $products,
            'message'   => Session::has('message') ? Session::get('message') : null,
            'columns'   => Product::$indexColumnKeys
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Product/Create", ['csrfToken' => csrf_token()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        try {
            $data = $request->except('_token');
            Product::create($data);

            return redirect()->route('products.index')->with('message', 'Successfully stored');
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
    public function edit(Product $product)
    {
        return Inertia::render('Product/Edit', [
            'csrfToken' => csrf_token(),
            'pr$product'    => $product
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        try {
            $data = $request->except('_token');
            $product->update($data);

            return redirect()->route('products.index')->with('message', 'Successfully updated');
        } catch (Exception $e) {
            return response()->json([
                'message'   => $e->getMessage()
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        try {
            $product->delete();
            return redirect()->route('products.index')->with('message', "Successfully deleted");
        } catch (Exception $e) {
            return response()->json([
                'message'   => $e->getMessage()
            ]);
        }
    }
}
