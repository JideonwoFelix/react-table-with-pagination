import React from 'react'
import './TableHeader.css';
function TableHeader() {
  return (
    <div className='table-header'>
        <form>
            <input 
            placeholder='Product Name or Sku'
            name="product"
            />
            <input 
            placeholder='Vendor Name or Sku'
            name="vendor"
            />

            <select name="sale">
                <option value="" disabled selected>On Sale</option>
                <option value="">None</option>
                <option value="">None</option>
            </select>

            <select name="stock">
            <option value="" disabled selected>On Stock</option>
                <option value="">None</option>
                <option value="">None</option>
            </select>

            <select name="Product">
            <option value="" disabled selected>On Product</option>
                <option value="">None</option>
                <option value="">None</option>
            </select>

            <input
            type='date'
            placeholder='mm/dd/yyyy-mm/dd/yy'
            name='date'
            />
            <button type="submit">Apply</button>
        </form>
    </div>
  )
}

export default TableHeader