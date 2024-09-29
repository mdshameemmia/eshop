<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use App\Http\Resources\AttributeResource;
use Illuminate\Http\Resources\Json\JsonResource;


class AttributeOptionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
         return [
            'id' => $this->id,
            'value' => $this->value,
            'attribute_name' => $this->attribute->name,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
