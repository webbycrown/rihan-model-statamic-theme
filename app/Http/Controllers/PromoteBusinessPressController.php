<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Statamic\Facades\Form;

class PromoteBusinessPressController extends Controller
{
    public function submit(Request $request)
    {
        $validator = Validator::make($request->all(), [

            'your_name' => [
                'required',
                'string',
                'max:255',
            ],

            'company' => [
                'required',
                'string',
                'max:255',
            ],

            'email_address' => [
                'required',
                'email',
            ],

            'phone_number' => [
                'required',
                'numeric',
                'min_digits:10',
                'max_digits:15',
            ],

            /*
            |--------------------------------------------------------------------------
            | Checkbox Group
            |--------------------------------------------------------------------------
            */

            'role' => [
                'required',
                'array',
                'min:1',
            ],

            'role.*' => [
                'string',
            ],

            'budget' => [
                'required',
                'string',
                'max:255',
            ],

            'brief_enquiry' => [
                'required',
                'string',
                'min:3',
            ],

        ], [

            'role.required' => 'Please select at least one option.',
            'role.min' => 'Please select at least one option.',

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

        $form = Form::find('promote_your_business_press');

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
