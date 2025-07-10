import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";

const MapModal = ({ open, onClose, url, downloadName }) => (
  <Dialog 
    open={open} 
    handler={onClose} 
    size="xxl"
    className="fixed right-0 top-0 h-full w-3/4 ml-1/4" // Adjust width and positioning
    style={{
      marginLeft: '16rem', // Match your sidebar width
      maxWidth: 'calc(100% - 16rem)', // Subtract sidebar width
      marginTop: '1rem',
      marginRight: '1rem',
      height: 'calc(100% - 2rem)'
    }}
  >
    <DialogHeader>Map Preview</DialogHeader>
    <DialogBody divider className="h-[80vh]">
      <iframe
        src={url}
        title="Map Preview"
        className="w-full h-full border rounded"
      />
    </DialogBody>
    <DialogFooter className="flex justify-between">
      <Button
        variant="outlined"
        onClick={onClose}
        className="mr-2"
      >
        Close
      </Button>
      <Button
        variant="gradient"
        color="blue"
        onClick={() => window.open(url, "_blank")}
      >
        Download
      </Button>
    </DialogFooter>
  </Dialog>
);

export default MapModal;