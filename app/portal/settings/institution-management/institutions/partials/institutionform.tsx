import React from 'react'
import { useForm } from 'react-hook-form'
import Selectoption from 'app/app/components/form-components/selectoption'
import { FormItem, FormLabel, FormField, Form, FormControl, FormDescription, FormMessage } from 'app/app/components/form-components'
function institutionform() {
    const uform = useForm()
    return (<form>
        <nav className='grid grid-cols-1 gap-3'>
            <Selectoption label='Select Insitution Type' options={[]}/>
        </nav>
    </form>
    )
}

export default institutionform