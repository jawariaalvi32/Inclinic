import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import { CreateOnModalProps } from 'src/types/ComponentTypes';

const CreatePermission = ({ isOpen, openModal, data }: CreateOnModalProps) => {


    const handleClickOpen = () => {
        openModal(true);
    };

    const handleClose = () => {
        openModal(false);
    };


    return (
        <div>
            <Button size='small' variant='contained' className="gradientBtn" sx={{ px: 4 }} onClick={handleClickOpen}>
                Add Permissions
            </Button>

            <Dialog open={isOpen} onClose={handleClose} maxWidth="sm" fullWidth >
                <DialogTitle variant="h4" color="secondary.main">Permissions</DialogTitle>
                <DialogContent>
                    <div>
                        <FormControl fullWidth sx={{ my: 2 }}>
                            <TextField id="outlined-basic" label="Permission" variant="outlined" fullWidth />
                        </FormControl>
                    </div>

                    <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 7 }} className="gradientBtn" onClick={handleClose}>
                        Save
                    </Button>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default CreatePermission
