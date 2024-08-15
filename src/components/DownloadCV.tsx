import React from 'react';
import {Button} from "@/components/ui/button";
import {FileDownIcon} from "lucide-react";

function DownloadCv() {

    function handleDownload(){

    }
    return (
        <div>
            <Button variant={'outline'}
                    onClick={handleDownload}
                    className={'hover:bg-secondary border-4 border-secondaryFade'}>
                Download CV
                <span className={'hover:rotate-45'}>
                              <FileDownIcon/>
                          </span>
            </Button>
        </div>
    );
}

export default DownloadCv;