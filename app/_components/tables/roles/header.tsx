"use client";

import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useAppDispatch } from '@/store/hooks';
import { fetchRoles } from '@/store/thunks/roles.api';
import { Pencil } from 'lucide-react';
import { RefreshCcw } from 'lucide-react';

export default function RoleHeader() {

  const dispatch = useAppDispatch()

  return (
    <div className="flex justify-between">
      <FieldGroup>
        <Input className='w-56' placeholder='Search with title' />
      </FieldGroup>
      <ButtonGroup>
        <Button type='button' variant={"outline"} onClick={() => dispatch(fetchRoles())} >
          <RefreshCcw/>
        </Button>
        <Button type='button' variant={"outline"} onClick={() => alert("in progess!")}>
          <Pencil/>
        </Button>
      </ButtonGroup>
    </div>
  )
}