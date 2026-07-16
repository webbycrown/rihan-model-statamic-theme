<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Statamic\Facades\Form;
use Statamic\Facades\Submission;

class PromoteBusinessController extends Controller
{
    public function submit(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'your_name' => [
                'required',
                'string',
                'max:255',
            ],
            'email' => [
                'required',
                'email',
            ],
            'phone_number' => [
                'nullable',
                'numeric',
            ],
            'city' => [
                'nullable',
                'string',
            ],
            'product_description' => [
                'nullable',
                'string',
            ],
            'description' => [
                'required',
            ],
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
            ], 422);
        }

        /*
        |--------------------------------------------------------------------------
        | Save Statamic Form Submission
        |--------------------------------------------------------------------------
        */

        $form = Form::find('promote_your_business');
        $submission = $form
            ->makeSubmission()
            ->data($request->except(['_token']));
        $submission->save();

        return response()->json([
            'status' => true,
            'message' => 'Thank you! Your request has been submitted successfully.',
        ]);

    }
}
