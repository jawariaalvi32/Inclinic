import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { CreateOnModalProps } from 'src/types/ComponentTypes';

const CreateRole = ({ isOpen, openModal, data }: CreateOnModalProps) => {


    const handleClickOpen = () => {
        openModal(true);
    };

    const handleClose = () => {
        openModal(false);
    };

    const theme = useTheme();
    const [userRole, setuserRole] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof userRole>) => {
        const {
            target: { value },
        } = event;
        setuserRole(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const permissions = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];

    function getStyles(name: string, userRole: readonly string[], theme: Theme) {
        return {
            fontWeight:
                userRole.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }

    return (
        <div>
            <Button size='small' variant='contained' className="gradientBtn" sx={{ px: 4 }} onClick={handleClickOpen}>
                Add Roles
            </Button>

            <Dialog open={isOpen} onClose={handleClose} maxWidth="sm" fullWidth >
                <DialogTitle variant="h4" color="secondary.main">Role</DialogTitle>
                <DialogContent>
                    <TextField id="outlined-basic" label="Role Name" variant="outlined" fullWidth sx={{ my: 2 }} />

                    <div>
                        <FormControl fullWidth sx={{ my: 2 }}>
                            <InputLabel id="demo-multiple-chip-label">Permissions</InputLabel>
                            <Select
                                labelId="demo-multiple-chip-label"
                                id="demo-multiple-chip"
                                multiple
                                value={userRole}
                                onChange={handleChange}
                                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                        {selected.map((value) => (
                                            <Chip key={value} label={value} />
                                        ))}
                                    </Box>
                                )}
                                MenuProps={MenuProps}
                            >
                                {permissions.map((permission) => (
                                    <MenuItem
                                        key={permission}
                                        value={permission}
                                        style={getStyles(permission, userRole, theme)}
                                    >
                                        {permission}
                                    </MenuItem>
                                ))}
                            </Select>
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

export default CreateRole
