<?php

namespace App\Http\Controllers;

use Exception;
use Inertia\Inertia;
use App\Models\ContactUs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Mockery\Matcher\Contains;

class ContactUsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('ContactUs/Index', [
            'contactUs'   => ContactUs::all(),
            'message'   => Session::has('message') ? Session::get('message') : null,
            'columns'   => ContactUs::$indexColumnKeys
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("ContactUs/Create", ['csrfToken' => csrf_token()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        try {
            $data = $request->except('_token');
            ContactUs::create($data);

            return redirect()->route('contact-us.index')->with('message', 'Successfully stored');
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
    public function edit( $contactUs)
    {
        return Inertia::render('ContactUs/Edit', [
            'csrfToken' => csrf_token(),
            'contactUs'    => ContactUs::findOrFail($contactUs)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {
            $data = $request->except('_token');
            $contactUs = ContactUs::findOrFail($id);
            $contactUs->update($data);

            return redirect()->route('contact-us.index')->with('message', 'Successfully updated');
        } catch (Exception $e) {
            return response()->json([
                'message'   => $e->getMessage()
            ]);
        }
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            ContactUs::findOrFail($id)->delete();
            return redirect()->route('contact-us.index')->with('message', "Successfully deleted");
        } catch (Exception $e) {
            return response()->json([
                'message'   => $e->getMessage()
            ]);
        }
    }
}
